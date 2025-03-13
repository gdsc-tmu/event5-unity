using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AutoMotion : MonoBehaviour
{
    private Animator animator;
    private Transform mainCamera;
    private bool isJumping = false;
    private bool isIdle = false;
    private bool isWaving = false;



    void Start()
    {
        animator = GetComponent<Animator>();
        mainCamera = Camera.main.transform;

    }

    void Update()
    {
        HandleMovement();
        HandleJump();
        HandleWave();
    }

    private void HandleMovement()
    {
        bool isMoving = Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.S) || Input.GetKey(KeyCode.D);
        
        animator.SetBool("isWalking", isMoving);
        if (!isJumping) // ジャンプ中でない時にIdleを適用
        {
            animator.SetBool("isIdle", !isMoving);
        }
    }

    private void HandleJump()
    {
        if (Input.GetKeyDown(KeyCode.Space) && !isJumping)
        {
            isJumping = true;
            animator.SetBool("isIdle", false); // Idleを解除
            animator.Play("Jump");

            // ジャンプ → 1秒後にFall → 2秒後にLanding → 1秒後にIdleへ
            Invoke(nameof(StartFalling), 0.5f);
        }
    }

    private void StartFalling()
    {
        if (isJumping) // ジャンプ中ならFallを適用
        {
            animator.Play("Fall");
            Invoke(nameof(StartLanding), 1f);
        }
    }

    private void StartLanding()
    {
        if (isJumping) // ジャンプ中ならLandingを適用
        {
            animator.Play("Landing");
            Invoke(nameof(EndJump), 0f);
        }
    }

    private void EndJump()
    {
        isJumping = false;
        animator.SetBool("isIdle", true); // Idleに戻す
    }

    private void HandleWave()
    {
        if (Input.GetKeyDown(KeyCode.B) && !isWaving)
        {
            isWaving = true;
            animator.Play("Baybay"); // バイバイアニメーションを再生
            Invoke(nameof(EndWave), 1.5f); // 1.5秒後に終了
        }
    }

    private void EndWave()
    {
        isWaving = false;
        animator.SetBool("isIdle", true); // Idleに戻す

    }
}