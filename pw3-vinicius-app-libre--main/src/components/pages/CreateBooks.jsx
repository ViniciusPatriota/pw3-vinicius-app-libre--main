import React from "react";
import Input from '../forms/Input';

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
        
        </section>
    )
}

export default CreateBooks