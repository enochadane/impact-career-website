import * as React from "react";

import Link from "next/link";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import LinkIcon from "@mui/icons-material/Link";
import Typography from "@mui/material/Typography";

const containerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 550,
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

export default function ArticlesModal(props) {
  const articles = props.webArticles.data;
  return (
    <Modal open={props.visible} onClose={props.onClose}>
      <Box sx={containerStyle}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CloseIcon onClick={props.onClose} />
        </Box>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {articles &&
            articles.map((article) => (
              <Link
                href={article.attributes.link}
                style={{ textDecoration: "none" }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LinkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={article.attributes.title}
                    secondary={article.attributes.link}
                  />
                </ListItem>
              </Link>
            ))}
          {(!articles || articles.length === 0) && (
            <Typography variant='subtitle1' gutterBottom>
              No articles available for this training yet
            </Typography>
          )}
        </List>
      </Box>
    </Modal>
  );
}
