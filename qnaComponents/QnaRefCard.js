import { useRouter } from 'next/router';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: '321px',
    border: '1px solid gainboro',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  thumbnail: {
    height: '189px',
  },
});

QnaRefCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  content: PropTypes.string,
  tags: PropTypes.array,
  action: PropTypes.object, // {title: button action이름, action:button click action link url}
};

export default function QnaRefCard({ title, image, content, tags, action }) {
  // Todo 이미지 없을때 default 이미지
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.thumbnail} image={image} height={190} />
      <CardHeader title={title} />
      <CardContent>
        <p>{content}</p>
        {tags.map((tag, index) => {
          return (
            <Button style={{ margin: '2px', height: '15px', minWidth: '40px' }} key={index} variant="contained" href={tag.url}>
              {tag.key}
            </Button>
          );
        })}
      </CardContent>
      {action ? (
        <CardActions>
          <Button href={action.action}>{action.title}</Button>
        </CardActions>
      ) : (
        <></>
      )}
    </Card>
  );
}
