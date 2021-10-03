import React, {Component} from "react";
import Bookmark from '../../../../Assets/Illustrations/Bookmark.svg'
import { Container } from "@mui/material";
import styles from "../Bookmarks/BookmarkCSS";
import BookmarkGreet from'./BookmarkGreet'
// import Bookmarksidelogo from '../../../../Assets/Illustrations/bookmarklogo.png'
import LottieAnimation from '../../../LottieAnimation/LottieAnimation'
import bookmarklogo from '../../../../Assets/Illustrations/bookmark.json'
import ListCard from './ListCard'

import { Grid } from "@mui/material";

class Bookmarks extends Component {
    render() {
        return (
            <Container >
                <Grid 
        sx={styles.container}
        container
        spacing={3}
        alignContent="center"
        justifyContent="space-between"
      >
        <Grid item xs={8}>
            <BookmarkGreet></BookmarkGreet> 
            <ListCard/>
        </Grid>
        <Grid  marginTop={18}   item xs={4} md="4">
            <LottieAnimation
                lotti={bookmarklogo}
                height={400}
                width={400}
            />
          
        </Grid>
      </Grid>
            </Container>
        );
    }
}

export default Bookmarks;


