const fs = require('fs');
const mongoose = require('mongoose');
const connectDatabase = require('./mongodb_connection');
const User = require('../models/User');
const Adminlist = require('../models/Adminlist');
const Characters= require('../models/Characters');
const Contributions = require('../models/Contributions');
const Favourites = require('../models/Favourites');
connectDatabase();
  

     
   

const initial_database = async () => {
    //userData
    
    try {
      await User.deleteMany();
    
      let UserData = JSON.parse(fs.readFileSync('../data/userlist.json', 'utf-8'));
      UserData =  UserData.map(item => ({
        ...item,
        _id: new mongoose.Types.ObjectId(item._id['$oid'])  // 创建新的 ObjectId
      }));
      await User.insertMany(UserData);
      console.log('User Data uploaded successfully.');
    } catch (error) {
      console.error('Error uploading data:', error);
    }

    //AdminData
    try {
        await Adminlist.deleteMany();
      
        let AdminListData = JSON.parse(fs.readFileSync('../data/adminlist.json', 'utf-8'));
        AdminListData =  AdminListData.map(item => ({
          ...item,
          _id: new mongoose.Types.ObjectId(item._id['$oid'])  // 创建新的 ObjectId
        }));
        await Adminlist.insertMany(AdminListData);
        console.log('Admin Data uploaded successfully.');
      } catch (error) {
        console.error('Error uploading data:', error);
      }
    //CharacterData
      try {
        await Characters.deleteMany();
        let CharactersData = JSON.parse(fs.readFileSync('../data/characters.json', 'utf-8'));
        await Characters.insertMany(CharactersData);
        console.log('Characters Data uploaded successfully.');
      } catch (error) {
        console.error('Error uploading data:', error);
      }
      //ContributionsData
      try {
        await Contributions.deleteMany();
        let ContributionsData = JSON.parse(fs.readFileSync('../data/contributions.json', 'utf-8'));
        ContributionsData =  ContributionsData.map(item => ({
          ...item,
          userId: new mongoose.Types.ObjectId(item.user_id._id['$oid']),  // 创建新的 ObjectId
          reviewedBy:  item.reviewed_by ? new mongoose.Types.ObjectId(item.reviewed_by._id['$oid']) : null,
        }));
        await Contributions.insertMany(ContributionsData);
        console.log('Contributions Data uploaded successfully.');
      } catch (error) {
        console.error('Error uploading data:', error);
      }

      //Favourites
      try {
        await Favourites.deleteMany();
      
        let FavouritesData = JSON.parse(fs.readFileSync('../data/favourites.json', 'utf-8'));
        FavouritesData = FavouritesData.map(item => ({
          ...item,
          userId: new mongoose.Types.ObjectId(item.user_id._id['$oid'])  // 创建新的 ObjectId
        }));
        await Favourites.insertMany(FavouritesData);
        console.log('Favourites Data uploaded successfully.');
      } catch (error) {
        console.error('Error uploading data:', error);
      }



  };

initial_database();