import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const TvShowSchema = new Schema({
  
});

TvShowSchema.statics.findByTvShowDBId = function (id) {
    return this.findOne({ id: id });
  };

export default mongoose.model('TvShows', TvShowSchema);


