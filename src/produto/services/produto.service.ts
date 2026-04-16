import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "../entities/produto.entity";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteResult, ILike, Repository } from "typeorm";
import { CategoriaService } from "../../categoria/services/categoria.service";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>,
        private categoriaService: CategoriaService
    ) { }

    async findAll(): Promise<Produto[]> {
        return await this.produtoRepository.find({
            relations: { categoria: true }
        });
    }

    async findById(id: number): Promise<Produto> {
        let produto = await this.produtoRepository.findOne({
            where: { id },
            relations: { categoria: true }
        });

        if (!produto)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
        return produto;
    }

    async create(produto: Produto): Promise<Produto> {
        if (produto.categoria) {
            await this.categoriaService.findById(produto.categoria.id);
        }

        return await this.produtoRepository.save(produto);
    }
}