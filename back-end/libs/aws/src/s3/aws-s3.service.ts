import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Inject, Injectable, Scope } from "@nestjs/common";

import { AwsS3ModuleOptions } from "./options/aws-s3-module.options";
import { AWS_S3_MODULE_TOKEN } from "./tokens";
import {
  GetFileUriParams,
  GetFileUriResult,
  PutFileParams,
  PutFileResult,
} from "./types/aws-s3-service.type";

@Injectable()
export class AwsS3Service {
  private readonly s3: S3Client;
  private readonly acl: string;
  private readonly bucketName: string;
  private readonly expiresIn: number;
  private readonly endpoint?: string;

  constructor(@Inject(AWS_S3_MODULE_TOKEN) options: AwsS3ModuleOptions) {
    const { acl, bucketName, expiresIn, ...s3Options } = options;

    this.acl = acl;
    this.bucketName = bucketName;
    (this.endpoint = s3Options.endpoint), (this.expiresIn = expiresIn);

    this.s3 = new S3Client(s3Options);
  }

  async putFile({
    file,
    name,
    subPath,
  }: PutFileParams): Promise<PutFileResult> {
    const { buffer, mimetype, originalname } = file;

    const extention = originalname.split(".").pop() || "";

    const key = `${subPath}${name}-${Date.now()}.${extention}`;

    const command = new PutObjectCommand({
      ACL: this.acl,
      Body: buffer,
      Bucket: this.bucketName,
      ContentType: mimetype,
      Key: key,
    });

    await this.s3.send(command);

    return {
      key: key,
    };
  }

  async getPublicFileUri({
    key,
    bucket,
  }: GetFileUriParams): Promise<GetFileUriResult> {
    return {
      key,
      uri: `${this.endpoint}${bucket || this.bucketName}/${key}`,
    };
  }

  async getSignedFileUri({
    key,
    bucket,
  }: GetFileUriParams): Promise<GetFileUriResult> {
    const command = new GetObjectCommand({
      Bucket: bucket || this.bucketName,
      Key: key,
    });

    // const signedUri = await getSignedUrl(this.s3, command, {
    //   expiresIn: this.expiresIn,
    // });
    const signedUri = await getSignedUrl(this.s3, command);

    return {
      key,
      uri: signedUri,
    };
  }
}
