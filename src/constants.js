const API_KEY= "AIzaSyAJUQZfHASMkNzRAM2h9gjzYGINXv-BP3w";
export const API_URL =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`;
export const YOUTUBE_URL = "https://freelogopng.com/images/all_img/1656504144youtube-logo-png-white.png";
export const YOUTUBE_URL_B ="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png";
export const USER_URL = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3BmLWljb240LWppcjIwNjItcG9yLWwtam9iNzg4LnBuZw.png";
export const darkTheme = "https://png.pngtree.com/png-vector/20210823/ourmid/pngtree-dark-mode-icon-light-png-clipart-png-image_3811921.jpg";
export const CHANNEL_URL=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=`;
export const SEARCH = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${API_KEY}&q=`;
export const SEARCH_SUGGESTIONS = "http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=";
export const Comments=[{
    name:"abc",
    comment:"fjodf dfjdfd fdjfwoddf",
    replies:[{
        name:"xyz",
        comment:"dkfod dkfdihf dfdif",
        replies:[{
            name:"abc",
            comment:"fjodf dfjdfd fdjfwoddf",
            replies:[]
        },]
    },]
},{
    name:"pqr",
    comment:"fjodf dfjdfd fdjfwoddf",
    replies:[{
        name:"xyz",
        comment:"dkfod dkfdihf dfdif",
        replies:[{
            name:"abc",
            comment:"fjodf dfjdfd fdjfwoddf",
            replies:[]
        }]
    }]
}]