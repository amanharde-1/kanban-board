import { Avatar, Button, Container, Divider, Drawer, FormHelperText, Grid, TextField, Typography } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import Board from "./board";
import { useState } from "react";

const json = [
    {
        heading: 'To Do',
        content: [{
            label: 'CP',
            desc: 'Helpdesk Call AA999',
            comment: 1,
            tick: '0/3'
        },
        {
            label: 'CP',
            desc: 'Helpdesk Call BB999',

        }]
    },
    {
        heading: "Development",
        content: [{
            label: 'Fault',
            desc: 'Helpdesk Call CC999',
            like: 1
        },
        {
            label: 'CP',
            desc: 'Helpdesk Call EE999',

        }]
    },
    {
        heading: "Testing",
        content: [{
            label: 'Fault',
            desc: 'Helpdesk Call DD999'
        }]
    },
    {
        heading: "Done",
        content: [{
            label: 'CP',
            desc: 'Helpdesk Call FF999'
        },
        {
            label: 'Fault',
            desc: 'Helpdesk Call GG999'
        }]
    }
]

const BoardWrapper = () => {

    const [drawerValue, SetDrawerValue] = useState('');
    const onShowMenuClick = event => {
        SetDrawerValue('menu')
    }
    const onFilterClick = event => {
        SetDrawerValue('filter')
    }

    const handelClose = event => {
        SetDrawerValue('')
    }
    return (
        <>
            <Container maxWidth={false} className='container'>
                <Grid id="board-wrapper-head" display={'flex'} justifyContent='flex-start'>
                    <Grid container>
                        <Grid item>
                            <Typography variant="h6" className="board-name">
                                Kanban Board
                            </Typography>
                        </Grid>
                        <Divider orientation="vertical" variant="middle" flexItem className="divider" />
                        <Grid item >
                            <Button size="small" className="public-btn btn"
                                startIcon={<PublicIcon />}
                            >
                                Public
                            </Button>
                        </Grid>
                        <Divider orientation="vertical" variant="middle" flexItem className="divider" />
                        <Grid item>
                            <Avatar className='avtar'>AH</Avatar>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent={'flex-end'}>

                        <Divider orientation="vertical" variant="middle" flexItem className="divider" />
                        <Grid item>
                            <Button size="small" className="filter-btn btn"
                                startIcon={<FilterListIcon />}
                                onClick={onFilterClick}
                            >
                                Filter
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button size="small" className="public-btn btn"
                                startIcon={<MoreHorizIcon />}
                                onClick={onShowMenuClick}
                            >
                                Show menu
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid id="board-wrapper">
                    <Grid container spacing={1}>
                        {
                            json.map((data, index) => (
                                <Grid item md={3} sm={6} xs={12} key={index}>
                                    <Board
                                        data={data}
                                    />
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
            </Container>
            <Drawer
                sx={{

                    width: 400,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 400,
                        top: 96,
                        marginRight: 1,
                        borderRadius: 1,
                        background: '#FFFF'
                    },
                }}
                variant="persistent"
                anchor="right"
                open={drawerValue}
                style={{
                    top: 96
                }}
            >
                <Container className="container">
                    <Grid container spacing={2} display='contents'>
                        <Grid item textAlign='center' marginBottom={1}>
                            <Typography variant="subtitle2" display='contents'>Filter</Typography>
                            <CloseIcon fontSize="small" className="drawer-close-icon" onClick={handelClose} />
                        </Grid>
                    </Grid>
                    <Divider />

                    <Grid item marginTop={2}>
                        <Typography variant="caption" display='contents'>Keyword</Typography>
                        <TextField
                            variant="outlined"
                            placeholder="Enter a keywoard..."
                            size="small"
                            fullWidth
                        />
                        <FormHelperText className="helper-text">
                            Search cards, members, labels, and more.
                        </FormHelperText>
                    </Grid>

                    <Grid item marginTop={1}>
                        <Typography variant="caption" display='contents'>Members</Typography>

                    </Grid>
                </Container>
            </Drawer>
        </>
    )
}

export default BoardWrapper;