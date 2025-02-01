import express from 'express'

let pool;

pool = mysql.createPool({
    host:'localhost',
    user: 'hoot',
    password: 'nova_senha',
    database: 'clinica'
})