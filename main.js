function main() {
    //Access the canvas through DOM: Document Object Model
    var canvas = document.getElementById('myCanvas');   // The paper
    var gl = canvas.getContext('webgl');                // The brush and the paints

    var leftVertices = [
        //  Top cap
        -0.72, 0.2044, 0.990, 0.911, 0.624,
        -0.71, 0.1722, 0.990, 0.911, 0.624,
        -0.71, 0.2588, 0.990, 0.911, 0.624,

        -0.71, 0.1722, 0.990, 0.911, 0.624,
        -0.71, 0.2588, 0.990, 0.911, 0.624,
        -0.69, 0.1459, 0.990, 0.911, 0.624,

        -0.71, 0.2588, 0.990, 0.911, 0.624,
        -0.69, 0.1459, 0.990, 0.911, 0.624,
        -0.69, 0.2839, 0.990, 0.911, 0.624,

        -0.69, 0.1459, 0.990, 0.911, 0.624, 
        -0.69, 0.2839, 0.990, 0.911, 0.624,
        -0.66, 0.1240, 0.990, 0.911, 0.624,

        -0.69, 0.2839, 0.990, 0.911, 0.624,
        -0.66, 0.1240, 0.990, 0.911, 0.624,
        -0.66, 0.3034, 0.990, 0.911, 0.624,

        -0.66, 0.1240, 0.990, 0.911, 0.624,
        -0.66, 0.3034, 0.990, 0.911, 0.624,
        -0.61, 0.0931, 0.990, 0.911, 0.624,

        -0.66, 0.3034, 0.990, 0.911, 0.624,
        -0.61, 0.0931, 0.990, 0.911, 0.624,
        -0.61, 0.3293, 0.990, 0.911, 0.624,

        -0.61, 0.0931, 0.990, 0.911, 0.624,
        -0.61, 0.3293, 0.990, 0.911, 0.624,
        -0.56, 0.0721, 0.990, 0.911, 0.624,

        -0.61, 0.3293, 0.990, 0.911, 0.624,
        -0.56, 0.0721, 0.990, 0.911, 0.624,
        -0.56, 0.3448, 0.990, 0.911, 0.624,

        -0.56, 0.0721, 0.990, 0.911, 0.624,
        -0.56, 0.3448, 0.990, 0.911, 0.624,
        -0.50, 0.0659, 0.990, 0.911, 0.624,

        -0.56, 0.3448, 0.990, 0.911, 0.624,
        -0.50, 0.0659, 0.990, 0.911, 0.624,
        -0.50, 0.3504, 0.990, 0.911, 0.624,

        -0.50, 0.0659, 0.990, 0.911, 0.624,
        -0.50, 0.3504, 0.990, 0.911, 0.624,
        -0.45, 0.0721, 0.990, 0.911, 0.624,

        -0.50, 0.3504, 0.990, 0.911, 0.624,
        -0.45, 0.0721, 0.990, 0.911, 0.624,
        -0.45, 0.3448, 0.990, 0.911, 0.624,

        -0.45, 0.0721, 0.990, 0.911, 0.624,
        -0.45, 0.3448, 0.990, 0.911, 0.624,
        -0.38, 0.0918, 0.990, 0.911, 0.624,

        -0.45, 0.3448, 0.990, 0.911, 0.624,
        -0.38, 0.0918, 0.990, 0.911, 0.624,
        -0.39, 0.3293, 0.990, 0.911, 0.624,

        -0.38, 0.0918, 0.990, 0.911, 0.624,
        -0.39, 0.3293, 0.990, 0.911, 0.624,
        -0.34, 0.1240, 0.990, 0.911, 0.624,

        -0.39, 0.3293, 0.990, 0.911, 0.624,
        -0.34, 0.1240, 0.990, 0.911, 0.624,
        -0.34, 0.3034, 0.990, 0.911, 0.624,

        -0.34, 0.1240, 0.990, 0.911, 0.624,
        -0.34, 0.3034, 0.990, 0.911, 0.624,
        -0.30, 0.1590, 0.990, 0.911, 0.624,

        -0.34, 0.3034, 0.990, 0.911, 0.624,
        -0.30, 0.1590, 0.990, 0.911, 0.624,
        -0.30, 0.2588, 0.990, 0.911, 0.624,

        -0.30, 0.1590, 0.990, 0.911, 0.624,
        -0.30, 0.2588, 0.990, 0.911, 0.624,
        -0.28, 0.2044, 0.990, 0.911, 0.624,

        // Front cap
        -0.72, 0.2044, 0.990, 0.911, 0.624,
        -0.71, 0.1370, 0.990, 0.911, 0.624,
        -0.71, 0.1722, 0.990, 0.911, 0.624,

        -0.71, 0.1370, 0.990, 0.911, 0.624,
        -0.71, 0.1722, 0.990, 0.911, 0.624,
        -0.70, 0.1060, 0.990, 0.911, 0.624,

        -0.71, 0.1722, 0.990, 0.911, 0.624,
        -0.70, 0.1060, 0.990, 0.911, 0.624,
        -0.69, 0.1459, 0.990, 0.911, 0.624,

        -0.70, 0.1060, 0.990, 0.911, 0.624,
        -0.69, 0.1459, 0.990, 0.911, 0.624,
        -0.69, 0.0764, 0.990, 0.911, 0.624,

        -0.69, 0.1459, 0.990, 0.911, 0.624,
        -0.69, 0.0764, 0.990, 0.911, 0.624,
        -0.66, 0.1240, 0.990, 0.911, 0.624,

        -0.69, 0.0764, 0.990, 0.911, 0.624,
        -0.66, 0.1240, 0.990, 0.911, 0.624,
        -0.66, 0.0485, 0.990, 0.911, 0.624,

        -0.66, 0.1240, 0.990, 0.911, 0.624,
        -0.66, 0.0485, 0.990, 0.911, 0.624,
        -0.61, 0.0931, 0.990, 0.911, 0.624,

        -0.66, 0.0485, 0.990, 0.911, 0.624,
        -0.61, 0.0931, 0.990, 0.911, 0.624,
        -0.61, 0.0186, 0.990, 0.911, 0.624,

        -0.61, 0.0931, 0.990, 0.911, 0.624,
        -0.61, 0.0186, 0.990, 0.911, 0.624,
        -0.56, 0.0721, 0.990, 0.911, 0.624,

        -0.61, 0.0186, 0.990, 0.911, 0.624,
        -0.56, 0.0721, 0.990, 0.911, 0.624,
        -0.56, 0.0009, 0.990, 0.911, 0.624,

        -0.56, 0.0721, 0.990, 0.911, 0.624,
        -0.56, 0.0009, 0.990, 0.911, 0.624,
        -0.50, 0.0659, 0.990, 0.911, 0.624,

        -0.56, 0.0009, 0.990, 0.911, 0.624,
        -0.50, 0.0659, 0.990, 0.911, 0.624,
        -0.50, -0.004, 0.990, 0.911, 0.624,

        -0.50, 0.0659, 0.990, 0.911, 0.624,
        -0.50, -0.004, 0.990, 0.911, 0.624,
        -0.45, 0.0721, 0.990, 0.911, 0.624,

        -0.50, -0.004, 0.990, 0.911, 0.624,
        -0.45, 0.0721, 0.990, 0.911, 0.624,
        -0.45, 0.0018, 0.990, 0.911, 0.624,
        
        -0.45, 0.0721, 0.990, 0.911, 0.624,
        -0.45, 0.0018, 0.990, 0.911, 0.624,
        -0.38, 0.0918, 0.990, 0.911, 0.624,
        
        -0.45, 0.0018, 0.990, 0.911, 0.624,
        -0.38, 0.0918, 0.990, 0.911, 0.624,
        -0.38, 0.0213, 0.990, 0.911, 0.624,
        
        -0.38, 0.0918, 0.990, 0.911, 0.624,
        -0.38, 0.0213, 0.990, 0.911, 0.624,
        -0.34, 0.1240, 0.990, 0.911, 0.624,

        -0.38, 0.0213, 0.990, 0.911, 0.624,
        -0.34, 0.1240, 0.990, 0.911, 0.624,
        -0.34, 0.0539, 0.990, 0.911, 0.624,

        -0.34, 0.1240, 0.990, 0.911, 0.624,
        -0.34, 0.0539, 0.990, 0.911, 0.624,
        -0.30, 0.1590, 0.990, 0.911, 0.624,

        -0.34, 0.0539, 0.990, 0.911, 0.624,
        -0.30, 0.1590, 0.990, 0.911, 0.624,
        -0.31, 0.0897, 0.330, 0.311, 0.241,

        -0.30, 0.1590,  0.990, 0.911, 0.624,
        -0.31, 0.0897, 0.330, 0.311, 0.241,
        -0.29, 0.1370, 0.330, 0.311, 0.241,

        -0.30, 0.1590,  0.990, 0.911, 0.624,
        -0.29, 0.1370, 0.330, 0.311, 0.241,
        -0.28, 0.2044, 0.330, 0.311, 0.241,
        
        // Body
        -0.71, 0.1370, 0.990, 0.911, 0.624,
        -0.73, 0.1056, 0.990, 0.911, 0.624,
        -0.70, 0.1060, 0.990, 0.911, 0.624,

        -0.73, 0.1056, 0.990, 0.911, 0.624,
        -0.70, 0.1060, 0.990, 0.911, 0.624,
        -0.74, 0.0794, 0.990, 0.911, 0.624,

        -0.70, 0.1060, 0.990, 0.911, 0.624,
        -0.74, 0.0794, 0.990, 0.911, 0.624,
        -0.74, 0.0396, 0.990, 0.911, 0.624,

        -0.74, 0.0396, 0.990, 0.911, 0.624,
        -0.70, 0.1060, 0.990, 0.911, 0.624,
        -0.71, -0.1870, 0.990, 0.911, 0.624,

        -0.70, 0.1060, 0.990, 0.911, 0.624,
        -0.71, -0.1870, 0.990, 0.911, 0.624,
        -0.69, 0.0764, 0.990, 0.911, 0.624,

        -0.71, -0.1870, 0.990, 0.911, 0.624,
        -0.69, 0.0764, 0.990, 0.911, 0.624,
        -0.69, -0.2418, 0.990, 0.911, 0.624,

        -0.69, 0.0764, 0.990, 0.911, 0.624,
        -0.69, -0.2418, 0.990, 0.911, 0.624,
        -0.66, 0.0485, 0.990, 0.911, 0.624,

        -0.69, -0.2418, 0.990, 0.911, 0.624,
        -0.66, 0.04852, 0.990, 0.911, 0.624,
        -0.66, -0.2759, 0.990, 0.911, 0.624,

        -0.66, 0.0485, 0.990, 0.911, 0.624,
        -0.66, -0.2759, 0.990, 0.911, 0.624,
        -0.61, 0.0186, 0.990, 0.911, 0.624,

        -0.66, -0.2759, 0.990, 0.911, 0.624,
        -0.61, 0.0186, 0.990, 0.911, 0.624,
        -0.61, -0.3160, 0.990, 0.911, 0.624,

        -0.61, 0.0186, 0.990, 0.911, 0.624,
        -0.61, -0.3160, 0.990, 0.911, 0.624,
        -0.56, 0.0009, 0.990, 0.911, 0.624,
        
        -0.61, -0.3160, 0.990, 0.911, 0.624,
        -0.56, 0.0009, 0.990, 0.911, 0.624,
        -0.56, -0.3406, 0.990, 0.911, 0.624,

        -0.56, 0.0009, 0.990, 0.911, 0.624,
        -0.56, -0.3406, 0.990, 0.911, 0.624,
        -0.50, -0.0040, 0.990, 0.911, 0.624,
        
        -0.56, -0.3406, 0.990, 0.911, 0.624,
        -0.50, -0.0040, 0.990, 0.911, 0.624,
        -0.50, -0.35, 0.990, 0.911, 0.624,

        -0.50, -0.0040, 0.990, 0.911, 0.624,
        -0.50, -0.35, 0.990, 0.911, 0.624,
        -0.45, 0.0018, 0.990, 0.911, 0.624,
        
        -0.50, -0.35, 0.990, 0.911, 0.624,
        -0.45, 0.0018, 0.990, 0.911, 0.624,
        -0.45, -0.3420, 0.990, 0.911, 0.624,

        -0.45, 0.00, 0.990, 0.911, 0.624,
        -0.45, -0.34, 0.990, 0.911, 0.624,
        -0.38, 0.02, 0.990, 0.911, 0.624,

        -0.45, -0.34, 0.990, 0.911, 0.624,
        -0.38, 0.02, 0.990, 0.911, 0.624,
        -0.38, -0.31, 0.990, 0.911, 0.624,

        -0.38, 0.02, 0.990, 0.911, 0.624,
        -0.38, -0.31, 0.990, 0.911, 0.624,
        -0.34, 0.05, 0.990, 0.911, 0.624,

        -0.38, -0.31, 0.990, 0.911, 0.624,
        -0.34, 0.05, 0.990, 0.911, 0.624,
        -0.34, -0.27, 0.990, 0.911, 0.624,

        -0.34, 0.05, 0.990, 0.911, 0.624,
        -0.34, -0.27, 0.990, 0.911, 0.624,
        -0.31, 0.08, 0.990, 0.911, 0.624,

        -0.34, -0.27, 0.990, 0.911, 0.624,
        -0.31, 0.08, 0.990, 0.911, 0.624,
        -0.29, -0.20, 0.990, 0.911, 0.624,
        
        -0.31, 0.08, 0.990, 0.911, 0.624,
        -0.29, -0.20, 0.990, 0.911, 0.624,
        -0.26, 0.03, 0.330, 0.311, 0.241,

        -0.26, 0.03, 0.330, 0.311, 0.241,
        -0.31, 0.08, 0.990, 0.911, 0.624,
        -0.26, 0.07, 0.330, 0.311, 0.241,

        -0.31, 0.08, 0.990, 0.911, 0.624,
        -0.26, 0.07, 0.330, 0.311, 0.241,
        -0.27, 0.10, 0.330, 0.311, 0.241,

        -0.31, 0.08,0.990, 0.911, 0.624,
        -0.27, 0.10, 0.330, 0.311, 0.241,
        -0.29, 0.13, 0.330, 0.311, 0.241,
    ];

    var rightVertices = [
        // Top cap
        0.28, 0.17, 0.990, 0.911, 0.624,
        0.29, 0.14, 0.990, 0.911, 0.624,
        0.29, 0.22, 0.990, 0.911, 0.624,
        
        0.29, 0.14, 0.990, 0.911, 0.624,
        0.29, 0.22, 0.990, 0.911, 0.624,
        0.31, 0.11, 0.990, 0.911, 0.624,

        0.29, 0.22, 0.990, 0.911, 0.624,
        0.31, 0.11, 0.990, 0.911, 0.624,
        0.31, 0.25, 0.990, 0.911, 0.624,

        0.31, 0.11, 0.990, 0.911, 0.624,
        0.31, 0.25, 0.990, 0.911, 0.624,
        0.33, 0.09, 0.990, 0.911, 0.624,

        0.31, 0.25, 0.990, 0.911, 0.624,
        0.33, 0.09, 0.990, 0.911, 0.624,
        0.33, 0.27, 0.990, 0.911, 0.624,

        0.33, 0.09, 0.990, 0.911, 0.624,
        0.33, 0.27, 0.990, 0.911, 0.624,
        0.38, 0.06, 0.990, 0.911, 0.624,
        
        0.33, 0.27, 0.990, 0.911, 0.624,
        0.38, 0.06, 0.990, 0.911, 0.624,
        0.38, 0.29, 0.990, 0.911, 0.624,

        0.38, 0.06, 0.990, 0.911, 0.624,
        0.38, 0.29, 0.990, 0.911, 0.624,
        0.44, 0.04, 0.990, 0.911, 0.624,
        
        0.38, 0.29, 0.990, 0.911, 0.624,
        0.44, 0.04, 0.990, 0.911, 0.624,
        0.43, 0.31, 0.990, 0.911, 0.624,

        0.44, 0.04, 0.990, 0.911, 0.624,
        0.43, 0.31, 0.990, 0.911, 0.624,
        0.49, 0.03, 0.990, 0.911, 0.624,
        
        0.43, 0.31, 0.990, 0.911, 0.624,
        0.49, 0.03, 0.990, 0.911, 0.624,
        0.49, 0.31, 0.990, 0.911, 0.624,

        0.49, 0.03, 0.990, 0.911, 0.624,
        0.49, 0.31, 0.990, 0.911, 0.624,
        0.55, 0.04, 0.990, 0.911, 0.624,

        0.49, 0.31, 0.990, 0.911, 0.624,
        0.55, 0.04, 0.990, 0.911, 0.624,
        0.55, 0.31, 0.990, 0.911, 0.624,

        0.55, 0.04, 0.990, 0.911, 0.624,
        0.55, 0.31, 0.990, 0.911, 0.624,
        0.59, 0.06, 0.990, 0.911, 0.624,
        
        0.55, 0.31, 0.990, 0.911, 0.624,
        0.59, 0.06, 0.990, 0.911, 0.624,
        0.59, 0.30, 0.990, 0.911, 0.624,
        
        0.59, 0.06, 0.990, 0.911, 0.624,
        0.59, 0.30, 0.990, 0.911, 0.624,
        0.64, 0.09, 0.990, 0.911, 0.624,
        
        0.59, 0.30, 0.990, 0.911, 0.624,
        0.64, 0.09, 0.990, 0.911, 0.624,
        0.64, 0.27, 0.990, 0.911, 0.624,
        
        0.64, 0.09, 0.990, 0.911, 0.624,
        0.64, 0.27, 0.990, 0.911, 0.624,
        0.67, 0.12, 0.990, 0.911, 0.624,
        
        0.64, 0.27, 0.990, 0.911, 0.624,
        0.67, 0.12, 0.990, 0.911, 0.624,
        0.68, 0.23, 0.990, 0.911, 0.624,

        0.67, 0.12, 0.990, 0.911, 0.624,
        0.68, 0.23, 0.990, 0.911, 0.624,
        0.69, 0.17, 0.990, 0.911, 0.624,

        // Front cap
        0.28, 0.17,  0.330, 0.311, 0.241,
        0.28, 0.11, 0.330, 0.311, 0.241,
        0.29, 0.14, 0.990, 0.911, 0.624,

        0.28, 0.11, 0.330, 0.311, 0.241,
        0.29, 0.14, 0.330, 0.311, 0.241,
        0.29, 0.07, 0.990, 0.911, 0.624,

        0.29, 0.14, 0.330, 0.311, 0.241,
        0.29, 0.07, 0.990, 0.911, 0.624,
        0.31, 0.11, 0.990, 0.911, 0.624,

        0.29, 0.07, 0.990, 0.911, 0.624,
        0.31, 0.11, 0.990, 0.911, 0.624,
        0.31, 0.04, 0.990, 0.911, 0.624,

        0.31, 0.11, 0.990, 0.911, 0.624,
        0.31, 0.04, 0.990, 0.911, 0.624,
        0.33, 0.09, 0.990, 0.911, 0.624,

        0.31, 0.04, 0.990, 0.911, 0.624,
        0.33, 0.09, 0.990, 0.911, 0.624,
        0.33, 0.02, 0.990, 0.911, 0.624,
        
        0.33, 0.09, 0.990, 0.911, 0.624,
        0.33, 0.02, 0.990, 0.911, 0.624,
        0.38, 0.06, 0.990, 0.911, 0.624,
        
        0.33, 0.02, 0.990, 0.911, 0.624,
        0.38, 0.06, 0.990, 0.911, 0.624,
        0.38, -0.01, 0.990, 0.911, 0.624,
        
        0.38, 0.06, 0.990, 0.911, 0.624,
        0.38, -0.01, 0.990, 0.911, 0.624,
        0.44, 0.04, 0.990, 0.911, 0.624,

        0.38, -0.01, 0.990, 0.911, 0.624,
        0.44, 0.04, 0.990, 0.911, 0.624,
        0.44, -0.02, 0.990, 0.911, 0.624,

        0.44, 0.04, 0.990, 0.911, 0.624,
        0.44, -0.02, 0.990, 0.911, 0.624,
        0.49, 0.03, 0.990, 0.911, 0.624,
        
        0.44, -0.02, 0.990, 0.911, 0.624,
        0.49, 0.03, 0.990, 0.911, 0.624,
        0.49, -0.03, 0.990, 0.911, 0.624,

        0.49, 0.03, 0.990, 0.911, 0.624,
        0.49, -0.03, 0.990, 0.911, 0.624,
        0.55, 0.04, 0.990, 0.911, 0.624,

        0.49, -0.03, 0.990, 0.911, 0.624,
        0.55, 0.04, 0.990, 0.911, 0.624,
        0.55, -0.02, 0.990, 0.911, 0.624,
        
        0.55, 0.04, 0.990, 0.911, 0.624,
        0.55, -0.02, 0.990, 0.911, 0.624,
        0.59, 0.06, 0.990, 0.911, 0.624,

        0.55, -0.02, 0.990, 0.911, 0.624,
        0.59, 0.06, 0.990, 0.911, 0.624,
        0.59, -0.00, 0.990, 0.911, 0.624,
        
        0.59, 0.06, 0.990, 0.911, 0.624,
        0.59, -0.00, 0.990, 0.911, 0.624,
        0.64, 0.09, 0.990, 0.911, 0.624,
        
        0.59, -0.00, 0.990, 0.911, 0.624,
        0.64, 0.09, 0.990, 0.911, 0.624,
        0.64, 0.024, 0.990, 0.911, 0.624,
        
        0.64, 0.09, 0.990, 0.911, 0.624,
        0.64, 0.024, 0.990, 0.911, 0.624,
        0.67, 0.12, 0.990, 0.911, 0.624,
        
        0.64, 0.024, 0.990, 0.911, 0.624,
        0.67, 0.12, 0.990, 0.911, 0.624,
        0.67, 0.06, 0.990, 0.911, 0.624,
        
        0.67, 0.12, 0.990, 0.911, 0.624,
        0.67, 0.06, 0.990, 0.911, 0.624,
        0.69, 0.12, 0.990, 0.911, 0.624,

        0.67, 0.12, 0.990, 0.911, 0.624,
        0.69, 0.12, 0.990, 0.911, 0.624,
        0.69, 0.17, 0.990, 0.911, 0.624,

        // Body
        0.28, 0.10, 0.330, 0.311, 0.241,
        0.27, 0.07, 0.330, 0.311, 0.241,
        0.29, 0.07, 0.990, 0.911, 0.624,

        0.27, 0.07, 0.330, 0.311, 0.241,
        0.29, 0.07, 0.330, 0.311, 0.241,
        0.26, 0.05, 0.990, 0.911, 0.624,

        0.26, 0.05, 0.330, 0.311, 0.241,
        0.29, 0.07, 0.990, 0.911, 0.624,
        0.25, 0.01, 0.330, 0.311, 0.241,

        0.29, 0.07, 0.990, 0.911, 0.624,
        0.25, 0.01, 0.330, 0.311, 0.241,
        0.28, -0.21, 0.990, 0.911, 0.624,

        0.29, 0.07, 0.990, 0.911, 0.624,
        0.28, -0.21, 0.990, 0.911, 0.624,
        0.31, 0.04, 0.990, 0.911, 0.624,

        0.28, -0.21, 0.990, 0.911, 0.624,
        0.31, 0.04, 0.990, 0.911, 0.624,
        0.31, -0.26, 0.990, 0.911, 0.624,
        
        0.31, 0.04, 0.990, 0.911, 0.624,
        0.31, -0.26, 0.990, 0.911, 0.624,
        0.33, 0.02, 0.990, 0.911, 0.624,
        
        0.31, -0.26, 0.990, 0.911, 0.624,
        0.33, 0.02, 0.990, 0.911, 0.624,
        0.33, -0.30, 0.990, 0.911, 0.624,
        
        0.33, 0.02, 0.990, 0.911, 0.624,
        0.33, -0.30, 0.990, 0.911, 0.624,
        0.38, -0.01, 0.990, 0.911, 0.624,
        
        0.33, -0.30, 0.990, 0.911, 0.624,
        0.38, -0.00, 0.990, 0.911, 0.624,
        0.37, -0.32, 0.990, 0.911, 0.624,
        
        0.38, -0.00, 0.990, 0.911, 0.624,
        0.37, -0.32, 0.990, 0.911, 0.624,
        0.44, -0.02, 0.990, 0.911, 0.624,
        
        0.37, -0.32, 0.990, 0.911, 0.624,
        0.44, -0.02, 0.990, 0.911, 0.624,
        0.43, -0.34, 0.990, 0.911, 0.624,

        0.44, -0.02, 0.990, 0.911, 0.624,
        0.43, -0.34, 0.990, 0.911, 0.624,
        0.49, -0.03, 0.990, 0.911, 0.624,
        
        0.43, -0.34, 0.990, 0.911, 0.624,
        0.49, -0.03, 0.990, 0.911, 0.624,
        0.48, -0.35, 0.990, 0.911, 0.624,
        
        0.49, -0.03, 0.990, 0.911, 0.624,
        0.48, -0.35, 0.990, 0.911, 0.624,
        0.55, -0.02, 0.990, 0.911, 0.624,
        
        0.48, -0.35, 0.990, 0.911, 0.624,
        0.55, -0.02, 0.990, 0.911, 0.624,
        0.54, -0.34, 0.990, 0.911, 0.624,
        
        0.55, -0.02, 0.990, 0.911, 0.624,
        0.54, -0.34, 0.990, 0.911, 0.624,
        0.59, -0.00, 0.990, 0.911, 0.624,
        
        0.54, -0.34, 0.990, 0.911, 0.624,
        0.59, -0.00, 0.990, 0.911, 0.624,
        0.60, -0.31, 0.990, 0.911, 0.624,
        
        0.59, -0.00, 0.990, 0.911, 0.624,
        0.60, -0.31, 0.990, 0.911, 0.624,
        0.64, 0.024, 0.990, 0.911, 0.624,
        
        0.60, -0.31, 0.990, 0.911, 0.624,
        0.64, 0.02, 0.990, 0.911, 0.624,
        0.65, -0.28, 0.990, 0.911, 0.624,
        
        0.64, 0.02, 0.990, 0.911, 0.624,
        0.65, -0.28, 0.990, 0.911, 0.624,
        0.67, 0.06, 0.990, 0.911, 0.624,
        
        0.65, -0.28, 0.990, 0.911, 0.624,
        0.67, 0.06, 0.990, 0.911, 0.624,
        0.70, -0.21, 0.990, 0.911, 0.624,
        
        0.67, 0.06, 0.990, 0.911, 0.624,
        0.70, -0.21, 0.990, 0.911, 0.624,
        0.72, 0.01, 0.990, 0.911, 0.624,

        0.67, 0.06, 0.990, 0.911, 0.624,
        0.72, 0.01, 0.990, 0.911, 0.624,
        0.72, 0.05, 0.990, 0.911, 0.624,

        0.67, 0.06, 0.990, 0.911, 0.624,
        0.72, 0.05, 0.990, 0.911, 0.624,
        0.71, 0.07, 0.990, 0.911, 0.624,

        0.67, 0.06, 0.990, 0.911, 0.624,
        0.71, 0.07, 0.990, 0.911, 0.624,
        0.69, 0.12, 0.990, 0.911, 0.624
    ];

    var vertices = [...leftVertices,...rightVertices];

    // Create a linked-list for storing the vertices data
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform mat4 uTranslate;
        void main() {
            gl_Position = uTranslate * vec4(aPosition, 0.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);    
        }
    `;

    // Create .c in GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    // Compile .c into .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    // Prepare a .exe shell (shader program)
    var shaderProgram = gl.createProgram();

    // Put the two .o files into the shell
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    // Link the two .o files, so together they can be a runnable program/context.
    gl.linkProgram(shaderProgram);

    // Start using the context (analogy: start using the paints and the brushes)
    gl.useProgram(shaderProgram);

    // Teach the computer how to collect
    //  the positional values from ARRAY_BUFFER
    //  to each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition, 
        2, 
        gl.FLOAT, 
        false, 
        5 * Float32Array.BYTES_PER_ELEMENT, 
        0
    );
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor, 
        3, 
        gl.FLOAT, 
        false, 
        5 * Float32Array.BYTES_PER_ELEMENT, 
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var speed = 0.0158;
    var dy = 0;

    // Create a uniform to animate the vertices
    var uTranslate = gl.getUniformLocation(shaderProgram, "uTranslate");

    function render() {
        if (dy >= 0.65 || dy <= -0.60) speed = -speed;
		dy += speed;
        
        const rightPosition = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0, dy, 0.0, 1.0,
        ]

        const leftPosition = [
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0, 0.0, 0.0, 1.0,
            ]
		
        //coloring canvas
	gl.clearColor(0.0, 0.0, 0.0, 0.8); 
	gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniformMatrix4fv(uTranslate, false, leftPosition);
        gl.drawArrays(gl.TRIANGLES, 0, leftVertices.length/5);

		gl.uniformMatrix4fv(uTranslate, false, rightPosition);
        gl.drawArrays(gl.TRIANGLES, leftVertices.length/5, rightVertices.length/5);
            
        requestAnimationFrame(render);
    }
    render();
}