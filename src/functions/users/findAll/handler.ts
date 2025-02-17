import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
//import { UserRepository } from 'src/users/entity/user.repository';
//import { UserService } from 'src/users/services/user.service';
import { container } from 'src/config/inversify.config';
import { UserService } from 'src/users/services/user.service';

export const main = async (event:APIGatewayProxyEvent, context?: Context) => {
  //const {name} = JSON.parse(event.body) as {name:string}
  //const { awsRequestId } = context

  try{
    //const userService = new UserService(new UserRepository()) //inyeccion de dependencias clásica sin container
    const userService = container.get(UserService)
    const STAGE = process.env.STAGE;

    return formatJSONResponse({
      result: userService.findAll(),
    });

  }catch(e){
    return formatJSONResponse({
      message: `Error: ${e.message}`,
    }); 
  }
};

