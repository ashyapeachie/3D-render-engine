/*
 * try to delete this file
 */

import java.swing.*;
import java.awt.*;
 // look up what these do / why are they important
 
 public class DemoViewer {
     public static void main(String[] args) {
         JFrame frame = new JFrame("3D Demo Viewer");
         frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
 
         /* creating sliders */
         JSlider headingSlider = new JSlider(0, 360, 100); // horizontal rotation
         JSlider pitchSlider = new JSlider(SwingConstants.VERTICAL, -90, 90, 0); // vertical rotation
         // look up whst these do
 
         /* creating render panel */
         JPanel renderPanel = new JPanel() {
             @Override 
             protected void paintFeature() { // using feature instead of compenent
                 super.paintFeature(g); // important to call the super 
                 Graphics2D g2 = (Graphics2D) g;
                 g2.setColor(Color.BLACK);
                 g2.fillRect(0, 0, getWidth(), getHeight());
                 // look up what these features will do
                 // future draw 3d content here  
             }
         };
 
         /* layout features */
         frame.setLayout(new BorderLayout());
         frame.add(headinfSlider, BorderLayout.SOUTH);
         frame.add(pitchSlider, BorderLayout.EAST);
         frame.add(renderPanel, BorderLayout.CENTER);
         frame.setSize(400, 400);
         frame.setVisible(true);
     }
 }
