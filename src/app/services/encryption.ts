/**
 * Created By HMSPL
 * Toast Service
 */
import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class EncryptionServices {
    public encryptedData: any;
    constructor() {
    }
    convert(data) {
        this.encryptedData = Md5.hashStr(data);
        return Md5.hashStr(data);
    }
}
