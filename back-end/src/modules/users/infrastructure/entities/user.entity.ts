import { Schema, Prop, ModelDefinition, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { UserModel } from "../../domain";

@Schema({ collection: "users", versionKey: false })
export class UserEntity implements UserModel {
  readonly _id: Types.ObjectId;

  @Prop({ required: true, unique: true, index: 1 })
  email: string;

  @Prop({ required: true, unique: true, index: 2 })
  login: string;

  @Prop({ required: true, index: 3 })
  password: string;

  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop({ type: Object })
  profile: {
    key: string;
    uri: string;
  };
}

export type UserDocument = UserEntity & Document;

export const UserModelDefinition: ModelDefinition = {
  name: UserEntity.name,
  schema: SchemaFactory.createForClass(UserEntity),
  collection: "users",
};
