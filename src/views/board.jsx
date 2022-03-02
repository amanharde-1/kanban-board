import { Grid, Paper, Typography } from "@mui/material";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import Draggable from "react-draggable";

const Board = ({ data }) => {

    return (

        <Paper className="board-paper">
            <Typography variant="body2" paddingX={2} paddingY={1}>
                <strong>{data?.heading}</strong>
            </Typography>
            {
                data?.content.map((con, _index) => (
                    <Grid item padding={1} paddingTop={0} key={_index}>
                        <Draggable>
                            <Paper component={Grid} padding={1 / 2} className="board-inner-paper">
                                <div>
                                    <span
                                        className={`${con?.label === 'CP' ? 'cp-label' : con?.label === 'Fault' ? 'fault-label' : undefined} label-span`}
                                        title={con?.label}
                                    >
                                        {/*    {con?.label} */}
                                    </span>
                                </div>
                                <Typography variant="subtitle2">
                                    {con?.desc}
                                </Typography>
                                <Typography variant="button">
                                    {
                                        con?.comment !== undefined &&
                                        <>
                                            <ModeCommentOutlinedIcon className="board-icon" /> {con?.comment}
                                        </>
                                    }
                                    {
                                        con?.tick !== undefined &&
                                        <>
                                            <CheckBoxOutlinedIcon className="board-icon" /> {con?.tick}
                                        </>
                                    }
                                    {
                                        con?.like !== undefined &&
                                        <>
                                            <ThumbUpAltOutlinedIcon className="board-icon" /> {con?.like}
                                        </>
                                    }
                                </Typography>
                            </Paper>
                        </Draggable>
                    </Grid>
                ))
            }

        </Paper>
    )
}

export default Board;