import { Injectable } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { SearchBookmarkDto } from './dto/search-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update.bookmark.dto';

@Injectable()
export class BookmarksService {
    private bookmarks : Bookmark[]= [{
        id:uuidv4(),
        url:'https://google.com',
        description: 'bookmark number 1'
    }]

    findAll():Bookmark[]{
        return this.bookmarks
    }
    search(searchBookmarkDto:SearchBookmarkDto){
        let newbookmarks = this.findAll()
        
        const {url,description} = searchBookmarkDto
        if(url){
            newbookmarks = this.bookmarks.filter((bookmark)=>
            bookmark.url === url) 
        }
        if(description){
            newbookmarks = this.bookmarks.filter((bookmark)=>
            bookmark.description === description) 
        }
        return newbookmarks
    }

    findOne(id:String):Bookmark{
        const find = this.bookmarks.find((item)=> item.id === id)
        return find
    }
    creat(createBookmarkDto:CreateBookmarkDto):Bookmark{
        const{url,description} = createBookmarkDto
        const newBookmark:Bookmark = {
            id:uuidv4(),
            url,
            description
        }
        this.bookmarks.push(newBookmark)
        return newBookmark
    }

    delete(id:string){
        this.bookmarks = this.bookmarks.filter((bookmark)=> bookmark.id !== id)
    }
    
    update(id:string,updateBookmarkDto:UpdateBookmarkDto){
        let find = this.bookmarks.find((bookmark) =>bookmark.id === id)
        const {url,description} = updateBookmarkDto
        if(find){

            find.url = url
            find.description = description
        }
        return find
    }
}
