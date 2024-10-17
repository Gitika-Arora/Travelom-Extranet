//import Compressor from 'compressorjs';
import secureLocalStorage from "react-secure-storage";
import CryptoJS from "crypto-js";
import { post } from 'aws-amplify/api';
import { generateClient } from 'aws-amplify/api';
import { signOut } from 'aws-amplify/auth';

export function isVallidImageFile(image) {
    let imgType = image.type;
    let fileType = imgType.split('/')[0];
    return (fileType === 'image') ? true : false;
}

export async function getImageUrl(image, callback) {
    let validImage = isVallidImageFile(image);
    if (validImage) {

        const reader = new FileReader();

        reader.onload = () => {
            callback(reader.result);
        };
        reader.readAsDataURL(image);
    }
    else {
        alert('Please Select Valid Image File');
    }
}
export async function handleImage(file) {
    console.log(file)
    var handleImage = new File([file], {
        type: file.type,
    })
    return handleImage;

}

export function isVallidFile(file) {
    let imgType = file.type;
    let fileType = imgType.split('/')[0];
    return (fileType === 'image' || fileType === 'video' || fileType === 'audio') ? true : false;
}

export async function getFileUrl(file, callback) {
    let validFile = isVallidFile(file);
    if (validFile) {

        const reader = new FileReader();

        reader.onload = () => {
            callback(reader.result);
        };
        reader.readAsDataURL(file);
    }
    else {
        alert('Please Select Valid File');
    }
}

export function logedInUserId() {
    const userData = secureLocalStorage.getItem('userData');

    const parsedUserData = (userData) ? JSON.parse(userData).userId : "0";
    return parsedUserData;

}

export function logedInUser() {
    const userData = JSON.parse(secureLocalStorage.getItem('userData'));
    return userData;
}

export function encryptData(string) {
    const ciphertext = CryptoJS.AES.encrypt(string.trim(), 'p80%n!*_2u$2y');

    return ciphertext;
}

export function decryptData(string) {
    const decryptData = CryptoJS.AES.decrypt(string, 'p80%n!*_2u$2y');
    const decipherText = decryptData.toString(CryptoJS.enc.Utf8);

    return decipherText
}

export const sendWelcomeEmail = async (userData) => {
    const toEmail = userData?.email;
    const message = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Registration Confirmation</title>
                    </head>
                    <body style="font-family: Arial, sans-serif;">
                    
                     <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                        <tr>
                          <td style="background-color: #f8f8f8; padding: 20px;">
                            <h2>Welcome to <span style="color: #3D75F0;">Travelom</span>!</h2>
                            <p>Dear ${userData?.firstName} ${userData?.lastName},</p>
                            <p>Thank you for registering with us. Your account has been successfully created.</p>
                            <p>Your login details:</p>
                            <ul>
                              <li><strong>Email:</strong> ${userData?.email}</li>
                            </ul>
                            <p>We're thrilled to have you join our community. Feel free to explore our website and start planning your next trip!</p>
                            <p>If you have any questions or need assistance, don't hesitate to contact us.</p>
                            <p>Best regards,<br><span style="color: #3D75F0;">Travelom</span></p>
                          </td>
                        </tr>
                        <tr>
                          <td style="background-color: #333; color: #fff; padding: 10px; text-align: center;">
                            &copy; 2024 TravelOm. All rights reserved.
                          </td>
                        </tr>
                      </table>
                    
                    </body>
                    </html>`;
    const subject = "Welcome to TravelOm!";

    // Without Attachment:
    await sendEmail(toEmail, message, subject, true, null, (res) => {
        console.log("sendEmail response>> ", res)
    });
};

export const sendEmail = async (toEmail, message, subject, isHtmlContent, attachments, callBack) => {
    try {
        let bodyData = {
            toEmail: toEmail,
            message: message,
            subject: subject,
            isHtmlContent: isHtmlContent,
            attachments: attachments
        };
        
        if (attachments !== null) {
            bodyData = {
                ...bodyData,
                attachments: attachments
            };
        }

        const restOperation = post({
            apiName: "appUtils",
            path: "/sendEmail",
            options: {
                body: bodyData
            }
        });

        const { body } = await restOperation.response;
        const response = await body.json();
        callBack(response);

    } catch (e) {
        console.log('sendEmail failed: ', JSON.parse(e?.response?.body));
    }
};


class Helper {

    static client = null;

    static amplifyClient() {
        if (!this.client) {
            this.client = generateClient();
        }

        return this.client;
    }

    static isAuthenticated() {
        let loggedInuser = secureLocalStorage.getItem("login");

        if (loggedInuser) {
            return true;
        } else {
            return false;
        }
    }

    static arrayToString(arr) {
        let str = '';
        arr.forEach(function (i, index) {
            str += i;
            if (index !== (arr.length - 1)) {
                str += '';
            };
        });
        return str;
    }


    static formatDateTime(timestamp) {
        // Check if the timestamp is valid 
        if (!timestamp || typeof timestamp.seconds !== 'number' || typeof timestamp.nanoseconds !== 'number') {
            throw new Error("Invalid timestamp object");
        }

        // Convert the timestamp into milliseconds
        const milliseconds = timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1000000);

        // Create a Date object from the milliseconds
        const date = new Date(milliseconds);

        // Verify that the Date object is valid
        if (isNaN(date.getTime())) {
            throw new Error("Invalid date created from timestamp");
        }

        // Format the date
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
        const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);
        const formattedDate = day + " " + month + ", " + year;

        // Format the time
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const strTime = hours + ':' + minutes + ' ' + ampm;

        // Return the formatted date and time
        return formattedDate + " at " + strTime;
    }

    static formatDt(dt) {
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });

        const date = new Date(dt);
        const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);
        var formattedDate = day + " " + month + " " + year;

        return formattedDate;
    }

    static formatTime(dt) {
        //const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });

        const date = new Date(dt);
        //const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;

        return strTime;
    }

    static formatDateTimeline(dt) {
        const dateTimeFormat = new Intl.DateTimeFormat('en', { month: 'short', day: '2-digit' });

        const date = new Date(dt);
        const [{ value: month }, , { value: day },] = dateTimeFormat.formatToParts(date);
        var formattedDate = day + " " + month;

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;

        return formattedDate + ", " + strTime;
    }

    static formatDate(dt) {
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });

        const date = new Date(dt);
        const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);
        var formattedDate = day + " " + month + ", " + year;

        return formattedDate
    }

    static formatDateToSave(dt) {
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' });

        const date = new Date(dt);
        const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);
        var formattedDate = year + "-" + month + "-" + day;

        return formattedDate
    }

    static generateRandomString = (length) => {
        let result = '';
        let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    static generateRandomDigits(length) {
        var result = '';
        var digits = '0123456789';
        var digitsLength = digits.length;

        for (var i = 0; i < length; i++) {
            result += digits.charAt(Math.floor(Math.random() * digitsLength));
        }

        return result;
    }

    static formatNumber(num) {
        var formattedNumber = 0;

        if (num > 999 && num < 1000000) {
            formattedNumber = (parseFloat(num / 1000)).toFixed(2) + 'K';
        } else if (num > 1000000) {
            formattedNumber = parseFloat(num / 1000000).toFixed(2) + 'M';
        } else if (num < 1000) {
            formattedNumber = num;
        }

        return formattedNumber;
    }

    static Logout() {
        signOut();
        sessionStorage.clear();
        localStorage.clear();
    }

    static removeHtmlFromString(htmlString, wordLength) {
        const length = wordLength || 10;
        const string = htmlString.replace(/&#?[a-z0-9]+;|<([^>]+)>/ig, ' ').replace(/\s\s+/g, ' ');
        const words = string.split(' ');
        const newString = words.length > length
            ? `${words.slice(0, length).join(' ')}...`
            : string;

        return newString;
    }
}

export default Helper;