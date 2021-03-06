/**
 * Artist
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        name: {
            type: 'STRING'
        },
        avatar: {
            type: 'STRING'
        },
        uid: {
            type: 'STRING'
        },
  	    account: {
            type: 'JSON'
        },
        basicInfo: {
            type: 'JSON'
        },
        popMusic : {
            type: 'ARRAY'
        },
        similarArtist : {
            type: 'ARRAY'
        },
        tag : {
            type: 'ARRAY'
        },
        comment : {
            type: 'JSON'
        },
        picture : {
            type: 'JSON'
        },

        album : {
            type: 'JSON'
        }
    }

};
