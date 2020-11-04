
/*Declaration of artists and list */
export const artists = [];
const eltonJohn = new Artist("Elton John", "United Kingdom", "Rock","public/images/eltonJohn.jpg");
const eminem = new Artist("Eminem", "USA", "Rap","public/images/eminem.jpg");
const adele = new Artist("Adele", "United Kingdom", "Soul","public/images/adele.jpg");
const coldplay = new Artist("Coldplay", "United Kingdom", "Alternative Rock","public/images/coldplay.jpg");
const gorillaz = new Artist("Gorillaz", "United Kingdom", "Alternative Rock","public/images/gorillaz.jpg");

const lyrics = new Map([
    [eltonJohn.name ,'And it seems to me you lived your life like a candle in the wind'],
    [eminem.name, 'His palms are sweaty, knees weak, arms are heavy'],
    [adele.name, 'There\'s a fire starting in my heart'],
    [coldplay.name,'I used to rule the world'],
    [gorillaz.name, 'Sha, sha ba da, sha ba da, feel good']

])


/*Adding artists to the list */
artists.push(eltonJohn);
artists.push(eminem);
artists.push(adele);
artists.push(coldplay);
artists.push(gorillaz);

/*Constructor for Artist */
function Artist(name, country, genre, imgUrl) {
    this.name = name;
    this.country = country;
    this.genre = genre;
    this.imgUrl = imgUrl;
    this.perform = () => lyrics.get(name);
}