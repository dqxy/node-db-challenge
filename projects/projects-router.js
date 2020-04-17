const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.getProjects()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({ message: err.message });
  });
});

router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
        res.status(500).json({ message: err.message });
    });
  });

  router.get('/tasks', (req, res) => {
    Projects.getTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
        res.status(500).json({ message: err.message });
    });
  });

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Projects.findById(id)
  .then(project => {
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: err.message });
  });
});


router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.add(projectData)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: err.message });
  });
});

router.post('/resources', (req, res) => {
    const rData = req.body;
    Projects.addR(rData)
    .then(resource => {
        console.log(res);
      res.status(201).json(resource);
    })
    .catch (err => {
        console.log(res);
      res.status(500).json({ message: err.message });
    });
  });

  router.post('/tasks', (req, res) => {
    const tData = req.body;
    Projects.addT(tData)
    .then(task => {
        console.log(res);
      res.status(201).json(task);
    })
    .catch (err => {
        console.log(res);
      res.status(500).json({ message: err.message });
    });
  });

router.post('/:id/steps', (req, res) => {
  const stepData = req.body;
  const { id } = req.params; 

  Projects.findById(id)
  .then(project => {
    if (project) {
      Projects.addStep(stepData, id)
      .then(step => {
        res.status(201).json(step);
      })
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: err.message });
  });
});

module.exports = router;