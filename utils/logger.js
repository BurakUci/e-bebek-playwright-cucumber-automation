const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        // Hatalar sadece error.log'a gider
        new winston.transports.File({ 
            filename: 'logs/error.log', 
            level: 'error' 
        }),

        // Tüm loglar combined.log'a gider
        new winston.transports.File({ 
            filename: 'logs/combined.log' 
        }),

        // Console çıktısı renkli ve sade formatta
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        })
    ]
});

module.exports = logger;//ok
