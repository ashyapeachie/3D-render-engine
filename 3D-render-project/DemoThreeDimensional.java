/*
 * author:
 * filename:
 * description:
 */

 import java.swing.*;
 import java.awt.*;
 // swing and awt are libraries that provide GUI components and graphics
 
 public class DemoThreeDimensional {
     public static void main(String[] args) {
         /* creating the main window */
         JFrame frame = new JFrame("3D Demo Viewer");
         frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
         // close app
         frame.setSize(400, 400);
         // window size is 400 x 400 pixels
 
         /* using BorderLayout to arrange components in window */
         Container pane = frame.getContentPane();
         pane.setLayout(new BorderLayout());
 
         /* creating horizontal slider */
         JSlider headingSlider = new JSlider(0, 360, 100); 
         pane.add(headingSlider, BorderLayout.SOUTH);
 
         /* creating vertical rotation */
         JSlider pitchSlider = new JSlider(JSlider.VERTICAL, -90, 90, 0); 
         pane.add(pitchSlider, BorderLayout.EAST);
 
         /* creating panel to draw on */
         DrawingPanel drawingPanel = new DrawingPanel();
         // fixing camel case, caused compile error
         pane.add(drawingPanel, BorderLayout.CENTER);
 
         frame.setVisible(true);
         // shows the window
     }
 }
 
 /* separate class for the drawing panel */
 class DrawingPanel extends JPanel {
 
     @Override
     protected void paintComponent(Graphics g) {
         super.paintComponent(g); 
         // always call this first
         Graphics2D g2 = (Graphics2D) g;
 
         g2.setColor(Color.BLACK);
         // fills the panel with black color
         g2.fillRect(0, 0, getWidth(), getHeight());
 
         // You can add your drawing code here later
     }
 }