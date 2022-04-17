import styles from './Faq.module.scss'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const FAQ = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    return (
        <div className={styles.faq}>
            <h1>Frequently Asked Questions</h1>
            <div className={styles.faq__wrapper}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={styles.faq__accord}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }} className={styles.faq__accordion__title}>
                        What is DigiPhront?
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={styles.faq__accordion__text}>
                        DigiPhront is an all-in-one learning and management system platform that allows schools to effectively provide learning services and also manage the data of their students thus enabling them to increase their reach and reduce the stress and workload that comes with managing students data and information.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={styles.faq__accord}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    >
                    <Typography sx={{ width: '60%', flexShrink: 0 }} className={styles.faq__accordion__title}>What is your favorite thing about DigiPhront?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={styles.faq__accordion__text}>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={styles.faq__accord}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }} className={styles.faq__accordion__title}>
                        Advanced settings
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={styles.faq__accordion__text}>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={styles.faq__accord}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }} className={styles.faq__accordion__title}>Personal data</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={styles.faq__accordion__text}>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}
export default FAQ;
