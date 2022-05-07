import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { SearchBookmarkDto } from './dto/search-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update.bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
    constructor(private bookmarkService:BookmarksService){}
    @Get()
    search(@Query() searchBookmarkDto:SearchBookmarkDto){
        if(Object.keys(searchBookmarkDto).length){
            return this.bookmarkService.search(searchBookmarkDto)
        }
        return this.bookmarkService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id:String){
        return this.bookmarkService.findOne(id)
    }

    @Post()
    create(@Body() createBookmarkDto:CreateBookmarkDto):Bookmark{
        return this.bookmarkService.creat(createBookmarkDto)
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.bookmarkService.delete(id)
    }

    @Patch(':id')
    update(@Param('id') id:string,@Body() updateBookmarkDto:UpdateBookmarkDto){
        return this.bookmarkService.update(id,updateBookmarkDto)
    }
}
