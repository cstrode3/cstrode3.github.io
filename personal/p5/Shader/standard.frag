// Standard Context
precision mediump float;
uniform vec2 iResolution;
varying vec2 fragCoord;


void main() {
    // Making the screenspace range from -1 to 1
    vec2 uv = fragCoord * 2. - 1.;
    uv.x *= iResolution.x / iResolution.y;
    
    // Default color
    vec3 color = vec3(1., 0., 0.);

    // Color logic
    float d = length(uv);
    d = 0.02 / d;
    color *= d;
    
    // Output per pixel
    gl_FragColor = vec4(color, 1.);
}