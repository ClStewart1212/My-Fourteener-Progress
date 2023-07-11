const exampleController = {};

//TODO: add middleware
exampleController.exampleMiddleware = (req, res, next) => {
  const expectedProps = [
    'name',
    'height',
    'birth_year',
    'hair_color',
    'skin_color',
    'eye_color',
  ];
  res.locals.newCharacter = {};

  for (const prop of expectedProps) {
    if (!req.body[prop])
      return next({
        log: `characterController.createCharacter ERROR: ${prop} on request body undefined`,
        message: {
          err: 'characterController.createCharacter: ERROR: Incorrect data received',
        },
      });

    res.locals.newCharacter[prop] = req.body[prop];
  }

  return next();
};

module.exports = exampleController;
