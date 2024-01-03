"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    return {
        dataValues: {
            id: 1,
            email: 'nico.contigliani@gmail.com',
            password: '$2b$10$fWgsvDYkhflXmZllUiBn.uX6.mrnwPxLG5zcFhF4Pgnz8SOtDEHN6',
            fullname: 'nicolas Contigliani',
            phone: '+549261444106',
            birthday: '11/7/2023',
            Score: '1000',
            status_user: true,
            createdAt: '2023-11-07T03:00:00.000Z',
            updatedAt: '2023-08-11T20:12:36.727Z'
        },
        _previousDataValues: {
            email: 'nico.contigliani@gmail.com',
            password: '$2b$10$fWgsvDYkhflXmZllUiBn.uX6.mrnwPxLG5zcFhF4Pgnz8SOtDEHN6',
            fullname: 'nicolas Contigliani',
            phone: '+549261444106',
            birthday: '11/7/2023',
            Score: '1000',
            status_user: true,
            createdAt: '2023-11-07T03:00:00.000Z',
            updatedAt: '2023-08-11T20:12:36.727Z',
            id: 1
        },
        uniqno: 1,
        _changed: new Set(),
        _options: {
            isNewRecord: true,
            _schema: null,
            _schemaDelimiter: '',
            attributes: undefined,
            include: undefined,
            raw: undefined,
            silent: undefined
        },
        isNewRecord: false
    };
});
