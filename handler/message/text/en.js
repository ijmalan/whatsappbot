exports.textMenu = (pushname) => {
    return `
Hi, ${pushname || ''}! 👋️
Here are some of the features of this bot! ✨

Sticker Maker:
1. *#sticker*

2. *#stickers* _<Image Url>_

3. *#gifsticker* _<Giphy URL>_ / *#stickergif* _<Giphy URL>_

Downloader:
1. *#tiktok* _<post / video url>_

2. *#fb* _<post / video url>_

3. *#ig* _<post / video url>_

4. *#twt* _<post / video url>_


Hope you have a great day!✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Here are some of the group admin features included in this bot!

1. *#kick* @user
Removing members from the group (can be more than 1).

2. *#promote* @user
Promote members to group admins.

3. *#demote* @user
Demote Group admins.

3. *#tagall*
Mention of all group members.`
}
