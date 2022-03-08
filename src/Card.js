
/**  presentational component for dispalying Card image 
 * 
 * props:
 * - cardImage: src for card image
 * - cardCode: alt for card image if not found
 * 
 * states:
 * none
 * 
 * CardGame -> Card
*/
function Card({ cardImage, cardCode }) {
  return (
    <img src={cardImage} alt={cardCode} />
  );
}

export default Card;