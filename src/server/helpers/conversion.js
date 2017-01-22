export const getOnlyPosition = (vector3f) => (
  {
    x: vector3f.x,
    y: vector3f.y,
    z: vector3f.z,
  }
);

export const vector3f = (position) => new Vector3f(position.x, position.y, position.z);

