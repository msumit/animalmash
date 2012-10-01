require 'rubygems'
require 'sinatra'
require 'mongo'
require 'json'

def to_bson_id(id) BSON::ObjectId.from_string(id) end
def from_bson_id(obj) obj.merge({'_id' => obj['_id'].to_s}) end

DB = Mongo::Connection.new.db("animalmash", :pool_size => 5, :timeout => 5)
list = Array.new
list = DB.collection('am').find().to_a.map{|t| from_bson_id(t)}

get '/' do
  haml :index, :attr_wrapper => '"', :locals => {:title => 'Animal Mash: An ExtJs, Sinatra, Mongodb Sample App'}
end

get '/next' do
  id1 = rand(60) + 1
  id2 = rand(60) + 1

  if id1 == id2
    redirect back
  end

  {"id1" => list[id1]['_id'], "image1" => list[id1]['image'], "id2" => list[id2]['_id'], "image2" => list[id2]['image']}.to_json
end

put '/:id' do
  record = DB.collection('am').find({_id: to_bson_id(params[:id])}).to_a
  DB.collection('am').update({"_id" => record[0]['_id']}, {"$set" => { "like"  =>  record[0]['like'].to_i + 1 }})
end

get '/all' do
  DB.collection('am').find().to_a.map{|t| from_bson_id(t)}.to_json
end

