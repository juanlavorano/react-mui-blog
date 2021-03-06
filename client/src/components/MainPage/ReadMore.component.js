import React from 'react';
import Link from '@material-ui/core/Link'
import { Link as ReadMoreLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    text: {
        fontStyle: 'italic',
        textDecoration: 'none',
    }
}));

export default function ReadMore(props) {
    const classes = useStyles();

    return (
        <ReadMoreLink to={`/post/${props.route}`} style={{ cursor: 'pointer' }} className={classes.text}>
            <Link color={props.color}>
                {` ...Read More`}
            </Link>
        </ReadMoreLink>
    );
}