import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessagesCreate{
    admin_id?:string;
    text:string;
    user_id:string;
}
class MessagesService{

    private messagesRepository: Repository<Message>;

    constructor(){
     this.messagesRepository = getCustomRepository(MessagesRepository);
    } 
async create({admin_id,text,user_id}: IMessagesCreate){     
    const messages = this.messagesRepository.create({
        admin_id,
        text,
        user_id
    });

    await this.messagesRepository.save(messages)

    return messages;
}
async listByUser(user_id:string){       
    const list = this.messagesRepository.find({ 
        where:{user_id},
        // ao passar a relação que esta na entidade ele retorna os dados dela juntamente.
        relations: ["user"]
    });
    return list;
}
}

export {MessagesService};