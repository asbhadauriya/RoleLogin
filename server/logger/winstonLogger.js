const{format,createLogger,transports}=require('winston');
const{timestamp,combine,printf,errors}=format;

const logger=createLogger({
    transports:[
        new transports.File({
            filename:'user.log', 
            level:'info',
            format:format.combine(format.timestamp({format:"HH:mm:ss"}),format.json())
        }),
        
    ]
})

module.exports=logger;
 