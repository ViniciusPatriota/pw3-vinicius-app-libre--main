import React from "react";
import Input from '../forms/Input';
import Select from "../forms/Select";
import Button from "../forms/Button";

import style from "./CreateBooks.module.css";

const CreateBooks = () => {
    return(
        <section className={style.create_book_container}>
            
            <h1>CADASTRO DE LIVROS</h1>

            <Input
                type='text'
                name='txt_livro'
                text='Título do Livro'
                placeHolder='Digite o nome do seu livro aqui'           
            />
            <Input
                type='text'
                name='txt_autor'
                text='Nome do autor'
                placeHolder='Digite o nome do ator aqui'           
            />
            <Input
                type='text'
                name='txt_descricao_livro'
                text='Descrição do livro'
                placeHolder='Digite a descrição do livro'           
            />
            <Select
                name='categoria'
                text='Escolha uma categoria de livro'
            />
            <Button
                rotulo='Cadastrar Livro'
            />
        
        </section>
    )
}

export default CreateBooks