
/*Declaration of artists and list */
export const artists = [];
const eltonJohn = new Artist("Elton John", "United Kingdom", "Rock");
const eminem = new Artist("Eminem", "USA", "Rap");
const adele = new Artist("Adele", "United Kingdom", "Soul");
const coldplay = new Artist("Coldplay", "United Kingdom", "Alternative Rock");
const gorillaz = new Artist("Gorillaz", "United Kingdom", "Alternative Rock");

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
function Artist(name, country, genre) {
    this.name = name;
    this.country = country;
    this.genre = genre;

    this.perform = () => lyrics.get(name);
}