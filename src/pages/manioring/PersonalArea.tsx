import personalAreaStl from './PersonalArea.module.css'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
createStyles({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}),
)(TableRow);



const useStyles = makeStyles({
table: {
  minWidth: 700,
},
});

export const PersonalArea = () => {

    const role = 'person'
    const classes = useStyles();

    return(
        <section className={personalAreaStl.PersonalArea}>
            {role === 'perso' && (
                <section className={personalAreaStl.person}>
                    <p>Имя: Аяна</p>
                    <p>Email: ayana@mail.com</p>
                    <p>Дата саздания аккаунта: 20 октября 2021</p>
                </section>
            )}

            {role === 'perso' && (
                <section className={personalAreaStl.company}>
                    <h3>В каких закупках вы учавствуете</h3>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                              <TableRow style={{background: 'linear-gradient(90deg, #f68e5e, #90d5ea)'}}>
                                  <StyledTableCell>№</StyledTableCell>
                                  <StyledTableCell align="center">НАИМЕНОВАНИЕ ОРГАНИЗАЦИИ</StyledTableCell>
                                  <StyledTableCell align="center">ВИД ЗАКУПОК</StyledTableCell>
                                  <StyledTableCell align="center">НАИМЕНОВАНИЕ ЗАКУПКИ</StyledTableCell>
                                  <StyledTableCell align="center">МЕТОД ЗАКУПОК</StyledTableCell>
                                  <StyledTableCell align="center">ДАТА ОПУБЛИКОВАНИЯ</StyledTableCell>
                                  <StyledTableCell align="center">МЕТОД ЗАКУПОК</StyledTableCell>
                              </TableRow>
                            </TableHead>

                            <TableBody>
                              <StyledTableRow>

                                <StyledTableCell component="th" scope="row">
                                  Закупка
                                </StyledTableCell>
                                <StyledTableCell align="center"><Link to='/area/set'>1</Link></StyledTableCell>
                                
                                <StyledTableCell align="center">1</StyledTableCell>
                                <StyledTableCell align="center">1</StyledTableCell>
                                <StyledTableCell align="center">1</StyledTableCell>
                                <StyledTableCell align="center">1</StyledTableCell>
                                <StyledTableCell align="center">1</StyledTableCell>
                                  
                              </StyledTableRow>
                            
                            
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                </section>
            )}

            {role === 'person' && (
                <section className={personalAreaStl.provider}>
                   <h3>Ваши закупки</h3>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                              <TableRow style={{background: 'linear-gradient(90deg, #f68e5e, #90d5ea)'}}>
                                  <StyledTableCell>№</StyledTableCell>
                                  <StyledTableCell align="center">НАИМЕНОВАНИЕ ОРГАНИЗАЦИИ</StyledTableCell>
                                  <StyledTableCell align="center">ВИД ЗАКУПОК</StyledTableCell>
                                  <StyledTableCell align="center">НАИМЕНОВАНИЕ ЗАКУПКИ</StyledTableCell>
                                  <StyledTableCell align="center">МЕТОД ЗАКУПОК</StyledTableCell>
                                  <StyledTableCell align="center">ДАТА ОПУБЛИКОВАНИЯ</StyledTableCell>
                              </TableRow>
                            </TableHead>

                            <TableBody>
                              <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                  Закупка
                                </StyledTableCell>
                                <StyledTableCell align="center"><Link to='/area/provider'>NomadComarce</Link></StyledTableCell>
                                
                                <StyledTableCell align="center">Наличные</StyledTableCell>
                                <StyledTableCell align="center">Закупка на компьютеры</StyledTableCell>
                                <StyledTableCell align="center">ограниченные</StyledTableCell>
                                <StyledTableCell align="center">20 октября 2021</StyledTableCell>
                              </StyledTableRow>
                            
                            
                            </TableBody>
                        </Table>
                    </TableContainer>
                </section>
            )}
        </section>
    )
}