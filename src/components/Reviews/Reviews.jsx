import PropTypes from "prop-types";
import { List, Item, Image, Name, Text, Wrap } from "./Reviews.styles";
import defaultImg from "../../images/defaultImg.png";

export function Reviews({ reviews }) {
    
    return (
        <List>
            {reviews.map(({ author_details, id, author, content }) => (
                <Item key={id}>
                    <Wrap>
                        <Image src={author_details.avatar_path === null || author_details.avatar_path.startsWith("/http") ? `${author_details.avatar_path}`.slice(1) : defaultImg}/>
                        <Name>{author}</Name>
                    </Wrap>    
                    <Text>{content}</Text>
                </Item>
            ))}
        </List>
    )
}

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        author: PropTypes.string,
        content: PropTypes.string,
        author_details: PropTypes.object
    }),),
}