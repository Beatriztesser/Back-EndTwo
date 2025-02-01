import express from 'express'
import mysql from 'mysql2/promise'



const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: 'nova_senha',
    database: 'clinica'
})
export default pool;