using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class behave : MonoBehaviour
{
   //rigidbodyを使うためにコンポーネントを取得しrbに代入
   private Rigidbody rb;
   
   
    // Start is called before the first frame update
    void Start()
    {
      rb = GetComponent<Rigidbody>() ;
        
    }

    // Update is called once per frame
    void Update()
    {
     if(Input.GetKey(KeyCode.W)){
        transform.Translate(0f, 0f, 0.001f);
     }
     if(Input.GetKey(KeyCode.S)){
        transform.Translate(0f, 0f, -0.001f);
     }   
     if(Input.GetKey(KeyCode.A)){
        transform.Rotate(0f, -0.5f, 0f);
     }   
    if(Input.GetKey(KeyCode.D)){
        transform.Rotate(0f, 0.5f, 0f);
     }
    if(Input.GetKey(KeyCode.Space)){
         rb.AddForce(0f, 5f, 0f);   
    }
    }
}
