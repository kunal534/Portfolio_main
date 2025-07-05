//
//  ViewController.swift
//  test_project
//
//  Created by Kunal Uttam on 08/05/25.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var images: UIImageView!// it's a weak connection used to mention that i 
    var isShowing=true
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        images.image=UIImage(named:"img1")
    }


    
    @IBAction func button_click(_ sender: Any) {
        if isShowing{
            images.image=UIImage(named:"img2")
        }
        else{
            images.image=UIImage(named:"img1")
        }
        isShowing.toggle()
    }
    
}

