const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    user: { type: String },
    email: { type: String },
    password: { type: String },
    telnum: { type: String },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
