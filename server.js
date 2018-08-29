// require node modules
const http = require('http');
const path = require('path');

// require external dependencies
const express = require('express');
const bodyParser = require('body-parser');

// bootstrap
const app = express();

// global configurations
app.set('view engine', 'jade');
app.set('port', 5000);
app.use(express.static(path.join(__dirname, 'client')));
app.use('/output', express.static('output'));
app.use('/node_modules', express.static('node_modules'));

// serve html files
app.get('/', (req, res) => {
    res.sendFile(path.join('templates', 'index.html'), {root: 'client'});
});

// use dependencies in every request
app.use(bodyParser.json());

// create server
const server = http
    .createServer(app)
    .listen(app.get('port'));

// get the data for the DNA match
// YOU ARE NOT SUPPOSED TO CHANGE THIS CODE
app.get('/fetch-dna-match', (req, res) => {
    const yourDna = [
        {
            sub_regions: [
                {
                    sub_regions: [
                        {
                            region: 'irish',
                            value: 0,
                        }, {
                            region: 'british',
                            value: 0,
                        }
                    ]
                }, {
                    sub_regions: [
                        {
                            region: 'spain',
                            value: 47,
                        }, {
                            region: 'portugal',
                            value: 2,
                        }
                    ]
                }
            ]
        }, {
            sub_regions: [
                {
                    sub_regions: [
                        {
                            region: 'chad',
                            value: 51,
                        },
                        {
                            region: 'mali',
                            value: 0,
                        }
                    ]
                }
            ]
        }
    ];
    // YOU ARE NOT SUPPOSED TO CHANGE THIS CODE
    const otherDna = [
        {
            sub_regions: [
                {
                    sub_regions: [
                        {
                            region: 'irish',
                            value: '3',
                        }, {
                            region: 'british',
                            value: '50',
                        }
                    ]
                }, {
                    sub_regions: [
                        {
                            region: 'spain',
                            value: '47',
                        }, {
                            region: 'portugal',
                            value: '0',
                        }
                    ]
                }
            ]
        }, {
            sub_regions: [
                {
                    sub_regions: [
                        {
                            region: 'chad',
                            value: '0',
                        }
                    ]
                }
            ]
        }
    ];
// YOU ARE NOT SUPPOSED TO CHANGE THIS CODE
    
    if (req.query['use_cache']) {
        res.json({data: {your_dna: yourDna, other_dna: otherDna, matchName: "John"}});
    } else {
        setTimeout(() => { // "db query"
            res.json({data: {your_dna: yourDna, other_dna: otherDna, matchName: "John"}});
        }, 400);
    }
});