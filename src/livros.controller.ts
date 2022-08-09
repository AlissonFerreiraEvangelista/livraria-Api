import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";

import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController{
    constructor(private livrosService: LivrosService){
    }

    @Get()
    async findAll(): Promise<Livro[]>{
        return this.livrosService.findAll();
    }

    @Get(':id')
    async findOne(@Param() param): Promise<Livro>{
        return this.livrosService.findOne(param.id);
    }

    @Post('create')
    async create(@Body() livro: Livro){
        this.livrosService.create(livro);
    }

    @Put()
    async update(@Body() livro: Livro):Promise<[number, Livro[]]>{
        return this.livrosService.update(livro);
    }

    @Delete(':id')
    async delete(@Param() param){
        this.livrosService.delete(param.id);
    }

}