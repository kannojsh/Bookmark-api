/*
Model Class that export the mongoose model of the BookMark
*/
const mongoose = require('mongoose')
const Bookmark = mongoose.model('Bookmark',

{
    BookmarksConfig: {
        title: String,
            content: {
            Bookmarkgroups: {
                Bookmarkgroup: [{
                        name: String,
                        data: String
                    }
                ]
            },
            BookmarkgroupDataList: {
                BookmarkgroupData: [{
                        uid: String,
                        Bookmarks: {
                            Bookmark: {
                                title: String,
                                link: String
                            }
                        },
                        MetaData: {
                            Creator: String,
                            CreationDate: String
                        }
                    
                    }
                ]
            }
        }
    }
}

)
module.exports = Bookmark
