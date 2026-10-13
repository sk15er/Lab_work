% Program 6: Sketching of Curves Along with Their Asymptotes

% Author: Shushank


close all;
clc;

x = linspace(-5, 5, 1000);
x1 = linspace(-5, -0.005, 1000);
x2 = linspace(0.005, 5, 1000);

y_hyperbola_1 = 1 ./ x1;
y_hyperbola_2 = 1 ./ x2;

y_asymptote = zeros(size(x));
x_asymptote = zeros(size(x));

plot(x1, y_hyperbola_1, 'b', 'LineWidth', 3);
hold on;
plot(x2, y_hyperbola_2, 'b', 'LineWidth', 3);

plot(x, y_asymptote, 'r--', 'LineWidth', 2);
xline(0, 'g--', 'LineWidth', 2);

hold off;

axis([-5 5 -5 5]);
xlabel('x');
ylabel('y');
title('Hyperbola and Asymptotes');

legend('Left Hyperbola', 'Right Hyperbola', ...
       'y = 0 (x-axis)', 'x = 0 (y-axis)');

grid on;