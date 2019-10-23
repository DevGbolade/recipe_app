const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  title:
   { type: String, 
    required: true
   },
  ingredients: 
  { type: String,
     required: true },
  instructions: 
  { type: String,
     required: true },
  time: { 
    type: Number, 
    required: true },
  difficulty: {
       type: Number, 
       required: true,
       default: 0,
       min: [0, 'difficulty must be above 0'],
       max: [5, 'difficulty must not be above 5'],
       },
});

module.exports = mongoose.model('Recipe', recipeSchema);