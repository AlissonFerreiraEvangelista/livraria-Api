import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table
export class Livro extends Model<Livro>{

    @ApiProperty({example: 'LIV090', description: `Código do Livro `,})
    @Column({type: DataType.STRING(60), allowNull: false,})
    codigo: string;
    
    @ApiProperty({example: 'Livro Amarelo', description: 'Informa o nome do Livro'})
    @Column({type: DataType.STRING, allowNull: false,})
    nome: string;

    @ApiProperty({example: '10.92', description: 'Informa o preço do Livro'})
    @Column({type: DataType.DECIMAL(2), allowNull: false,})
    preco: number;

}