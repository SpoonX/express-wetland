module.exports = wetland => {
  return (req, res, next) => {
    let manager;
    let getManager = () => {
      if (!manager) {
        manager = wetland.getManager();
      }

      return manager;
    };

    // Convenience functions on req to work with database.
    req.getManager = getManager;

    req.getRepository = (Entity) => {
      return getManager().getRepository(Entity);
    };

    // Make wetland accessible
    req.wetland = wetland;

    // You may now proceed, peasant.
    return next();
  };
};
